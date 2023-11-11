import * as S from "./style";
import React, { useEffect, useState } from "react";

import Draggable from "react-draggable";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import Header from "../layout/header/StickerEditorHeader";
import BlackBoardStickerModal from "./BlackBoardStickerModal";
import BlackBoard from "./BlackBoard";

import { API } from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

function BlackBoardEditor({ doSubmit, getDoSubmit, type, data }) {
  const params = useParams();
  const navigate = useNavigate();

  const handelsubmit = async () => {
    console.log("handelsubmit 함수 호출됨"); // 확인을 위한 로그

    try {
      //--------API쏘기
      let response;
      //-------- 타이틀일경우
      if (type == "title") {
        response = await API.post(`api/blackboard`, {
          title: data.title,
          introduction: data.introduction,
          graduateDate: data.graduateDate,
          stickers: stickers
        });
      }
      //-------- 편지일 경우
      else if (type == "letter") {
        response = await API.post(`api/letter?id=${params.url}`, {
          nickname: data.nickname,
          content: data.content,
          font: data.font,
          align: data.align,
          stickers: stickers
        });
      }

      if (response.status === 201) {
        if (type == "title") {
          navigate("/sendEmail", {
            state: {
              title: data.title,
              graduateDate: data.graduateDate,
              url: response.data.url
            }
          });
        } else {
          window.location.href = `/userBlackboard/${params.url}`;
          alert("칠판 편지 작성이 완료되었습니다!");
        }
      }
    } catch (error) {
      console.log("에러~", error);
      getDoSubmit(false);
    }
  };

  useEffect(() => {
    if (doSubmit) {
      handelsubmit();
    }
  }, [doSubmit]);

  const [showStickerModal, setShowStickerModal] = useState(false);
  const getShowStickerModal = bool => {
    setShowStickerModal(bool);
  };

  const emSize = (useInnerWidth() / 375) * 10;

  //현재 수정중인 스티커
  const [currentSticker, setCurrentSticker] = useState(0);
  const [stickers, setStickers] = useState([]);

  const getSticker = img => {
    setShowStickerModal(false);
    setStickers(
      stickers.concat({
        num: stickers.length + 1, //스티커 인덱스
        img: img, //스티커 종류

        positionX: 0,
        positionY: 0,

        width: 10, //스티커 크기
        angle: 0, //스티커 회전각
        mirror: 1 //좌우반전
      })
    );
  };

  const getWidthEm = width => {
    return width * (1 / emSize);
  };

  const getHeighthEm = height => {
    return height * (1 / emSize);
  };

  //스티커 크기조절
  const [size, setSize] = useState(1);

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].width = 10 * size;
    }
  }, [size]);

  //스티커 각도
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].angle = angle;
    }
  }, [angle]);

  //스티커 좌우 반전
  const [mirror, setMirror] = useState(1);
  const mirrorHandeler = () => {
    if (currentSticker != 0) {
      setMirror(mirror * -1);
      stickers[currentSticker - 1].mirror = mirror;
    }
  };

  useEffect(() => {
    if (currentSticker != 0) {
      setSize(stickers[currentSticker - 1].width / 10);
      setAngle(stickers[currentSticker - 1].angle);
      setMirror(stickers[currentSticker - 1].mirror);
    }
  }, [currentSticker]);

  //스티커 이동
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값

  const trackPos = data => {
    setCurrentSticker(data.node.title);
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].positionX = getWidthEm(position.x);
      stickers[currentSticker - 1].positionY = getHeighthEm(position.y);
    }
  }, [position]);

  return (
    <S.BlackBoardEditorWrapper $emSize={emSize + "px"}>
      <Header type={type} getShowStickerModal={getShowStickerModal} />

      <S.BlackBoardEditorContent>
        <S.BlackBoardEditorStickerArea>
          {/* 스티커 배치하기 */}
          {stickers.map(sticker => (
            <Draggable
              key={sticker.num}
              //   bounds={".draggableBounds"}
              onDrag={(e, data) => trackPos(data)}
            >
              <S.Sticker
                title={sticker.num}
                src={`/sticker/${sticker.img}.svg`}
                $position_x={sticker.positionX + "em"}
                $position_y={sticker.positionY + "em"}
                $img_width={sticker.width + "em"}
                $img_angle={sticker.angle + "deg"}
                $img_mirror={sticker.mirror}
                $movesticker={currentSticker == sticker.num}
                style={{ zIndex: `${sticker.num}` }}
              />
            </Draggable>
          ))}
          {/* 스티커 배치하기 */}

          {/* ----전에 받아온 칠판 데이터 */}
          <BlackBoard type={type} data={data} />
          {/* ----전에 받아온 칠판 데이터 */}
        </S.BlackBoardEditorStickerArea>
      </S.BlackBoardEditorContent>

      {/* 스티커 조절 슬라이더 ---- 옮기는 스티커가 있으면 보임*/}
      {currentSticker != 0 ? (
        <S.RangeListWrapper>
          <S.RangeList>
            {/* 크기 조절 */}
            <S.RangeWrapper>
              <S.RangeTitle>크기</S.RangeTitle>
              <S.Range
                className="slider"
                type="range"
                min={0}
                default={1}
                max={2}
                color="gray"
                step={0.02}
                value={size}
                onChange={event => {
                  setSize(event.target.valueAsNumber);
                }}
              />
            </S.RangeWrapper>
            {/* 각도조절 */}
            <S.RangeWrapper>
              <S.RangeTitle>각도</S.RangeTitle>
              <S.Range
                className="slider"
                type="range"
                min={-180}
                default={0}
                max={180}
                color="gray"
                step={0.02}
                value={angle}
                onChange={event => {
                  setAngle(event.target.valueAsNumber);
                }}
              />
            </S.RangeWrapper>
          </S.RangeList>

          {/* 좌우반전 */}
          <S.MirrorBtn src={"/Icon_Flip.svg"} onClick={mirrorHandeler} />
        </S.RangeListWrapper>
      ) : (
        <></>
      )}
      {/* 스티커 크기조절 슬라이더*/}

      {showStickerModal ? (
        <BlackBoardStickerModal
          getShowStickerModal={getShowStickerModal}
          getSticker={getSticker}
        />
      ) : (
        <></>
      )}
    </S.BlackBoardEditorWrapper>
  );
}

export default BlackBoardEditor;
