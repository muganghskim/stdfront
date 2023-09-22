import React from "react";

const News: React.FC = () => {
  return (
    <>
      <div className="news">
        <div className="news_title">
          <h2>
            공지사항 &<br></br>이벤트
          </h2>
        </div>
        <div className="right_info">
          {/* <% for(let i=0; i < 3; i++){ %>
                <a href="/brddetail/<%-brdData[i].num%>" style="color: #0F5FA6;">
                    <div class="news_list">
                        <div>
                            <p>뉴스</p>
                            <h3><%- brdData[i].name %></h3>
                            <p><%- brdData[i].time %></p>
                        </div>
                        <div><i class="fa-solid fa-arrow-right-long"></i></div>
                    </div>
                </a>
                <% } %> */}
        </div>
        <div className="sns_circle">
          <a href="/board">
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <img src="/img/ani_logo.png" alt="애니메이션 이미지"></img>
        </div>
      </div>
    </>
  );
};

export default News;
