const commonView = `<header id="manage-header">
        <h1>우테코 크루와 팀 매칭 관리 보드</h1>
        <nav>
          <ul>
            <li>
              <button id="crew-tab">크루 관리</button>
            </li>
            <li>
              <button id="team-tab">팀 매칭 관리</button>
            </li>
          </ul>
        </nav>
      </header>`;

const crewInfo = `<main>
    <section id="choose-crew">
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section id="crew-name">
      <h3></h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section id="crew-list">
      <h3></h3>
      <table border="1" id="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </section>
  </main>`;

const matchingInfo = `<main>
    <section id="choose-course-mission">
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
        </select>
        <select id="mission-select">
          <option value="baseball">숫자야구게임</option>
          <option value="racingcar">자동차경주</option>
          <option value="lotto">로또</option>
          <option value="shopping-cart">장바구니</option>
          <option value="payments">결제</option>
          <option value="subway">지하철노선도</option>
          <option value="performance">성능개선</option>
          <option value="deploy">배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
    <section id="make-team-matching">
      <h3></h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" id="team-member-count-input"/>
            <button id="match-team-button">팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id="show-list"> </ul>
      </div>
    </section>
    <!-- 팀 매칭이 된 경우 -->
    <section id="matching-result">
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id="team-match-result">
        <li></li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
    </section>
  </main>`;

export { commonView, crewInfo, matchingInfo };
