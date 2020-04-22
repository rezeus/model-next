/* eslint-disable no-constant-condition */

export function bar(): boolean {
  if (true) {
    return true;
  } else {
    return false;
  }
}

export async function barAsync(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (true) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}
