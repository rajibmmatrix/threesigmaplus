export function isPassword(params: string): boolean {
  if (params?.length < 8) {
    return false;
  }
  return true;
}

export function isValidEmail(params: string): boolean {
  return new RegExp('.+@[^@]+.[^@]{2,}$').test(params);
}
