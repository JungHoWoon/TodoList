import React, { useEffect, useState } from 'react';
import styles from './DateTime.module.css';

export default function DateTime() {
  const [clock, setClock] = useState('');
  const [toDay, setToDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const weekList = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    const day = date.getDay();
    const week = weekList[day];
    setToDay(`${date.getMonth() + 1}월 ${date.getDate()}일 ${week}`);
  }, []);

  useEffect(() => {
    const date = new Date();
    const time = setInterval(() => {
      setClock(
        `${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`
      );
    }, 1000);
    return () => clearInterval(time);
  }, [clock]);
  return (
    <div className={styles.day}>
      <p>{toDay}</p>
      <p>{clock}</p>
    </div>
  );
}
