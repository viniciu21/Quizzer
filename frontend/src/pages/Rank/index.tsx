import React, { useState, useEffect } from 'react';

import { User } from '../../context/contextAuth';

import { api } from '../../Api/api';

import {
  Container,
  PodiumContainer,
  PodiumTitle,
  Podium,
  GoldMedal,
  SilverMedal,
  BronzeMedal,
  RankingContaine,
  UsersContainer,
} from './styles';

const defaultUser: User[] = [{
  username: "UserDefault",
  id: 0,
  password: "",
  points: 0,
  time: 0,
  easy: 0,
  medium: 0,
  hard: 0
}]

const Rank: React.FC = () => {

  const [users, setUsers] = useState<User[]>(defaultUser);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('http://localhost:3333/api/auth/users');
      setUsers(data);
    })()
  }, [])

  const byDiffHard = [...users];

  const byDiffMedium = [...users];

  const byDiffEasy = [...users];

  const byPoints = [...users];

  const byTime = [...users];

  byDiffHard.sort((user1, user2) => user2.hard - user1.hard);

  byDiffMedium.sort((user1, user2) => user2.medium - user1.medium);

  byDiffEasy.sort((user1, user2) => user2.easy - user1.easy);

  byPoints.sort((user1, user2) => user2.points - user1.points);

  byTime.sort((user1, user2) => user1.time - user2.time);

  return (
    <Container>
      <PodiumContainer>
        <PodiumTitle>
          <p>Podium of questions by difficulty</p>
        </PodiumTitle>
        <Podium>
          <GoldMedal>
            <i className="fa fa-trophy" />
            User: {byDiffHard[0].username}, amount of hard questions: {byDiffHard[0].hard}
          </GoldMedal>
          <SilverMedal>
            <i className="fa fa-trophy" />
            Prata User: {byDiffMedium[0].username}, Amount of medium questions: {byDiffMedium[0].medium}
          </SilverMedal>

          <BronzeMedal>
            <i className="fa fa-trophy" />
            Bronze User: {byDiffEasy[0].username}, amount of easy questions: {byDiffEasy[0].easy}
          </BronzeMedal>
        </Podium>
      </PodiumContainer>
      <RankingContaine>
        <UsersContainer>
          <p>Ranked by score</p>
          {
            byPoints.map((user) =>
              <div key={user.username}>
                <h4>User: {user.username}</h4>
                <span>Points: {user.points}{user.points >= 200 ? ' Gold' : user.points >= 100 && user.points <= 200 ? ' Silver' : ' Bronze'}</span>
              </div>)
          }
        </UsersContainer>
        <UsersContainer>
          <p>The fastest</p>
          {
            byTime.map((user) =>
              <div key={user.username}>
                <h4>User: {user.username}</h4>
                <span>Time: {user.time}{user.time <= 5 ? ' Gold' : user.time <= 10 && user.time > 5 ? ' Silver' : " Bronze"}</span>
              </div>)
          }
        </UsersContainer>
      </RankingContaine>
    </Container>
  );
}

export default Rank;
