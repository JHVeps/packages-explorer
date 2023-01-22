export function removeWhiteSpaces(p: string) {
  let p1 = p.replace(/\s/g, "");
  return p1;
}

export function removeVersionInfo(p: string) {
  let p1 = p.replace(/\(.*?\)/, "");
  return p1;
}
