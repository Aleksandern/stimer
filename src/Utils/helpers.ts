
export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const parseUnixTime = (time: number, showMsecs = true) => {
  let formatted;
  let msecs: number | string = time % 1000;

  if (msecs < 10) {
    msecs = `00${msecs}`;
  } else if (msecs < 100) {
    msecs = `0${msecs}`;
  }

  const hours = Math.floor(time / 3600000);
  // const hoursFormatted = `${hours < 10 ? 0 : ''}${hours}`;

  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(time / 60000);
  // eslint-disable-next-line operator-assignment
  seconds = seconds - minutes * 60;
  // eslint-disable-next-line operator-assignment
  minutes = minutes - hours * 60;


  if (showMsecs) {
    formatted = `${
      minutes < 10 ? 0 : ''
    }${minutes}:${seconds < 10 ? 0 : ''}${seconds}:${msecs}`;
  } else {
    formatted = `${
      minutes < 10 ? 0 : ''
    }${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
  }

  const res = {
    formatted,
    hours,
    minutes,
    seconds,
  };

  return res;
};
