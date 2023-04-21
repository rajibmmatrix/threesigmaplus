export function isPassword(params: string): boolean {
  if (params?.length < 8) {
    return false;
  }
  return true;
}
