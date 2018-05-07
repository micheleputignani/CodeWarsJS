function expandedForm(num) {
  return num.toString()
  .split("")
  .reverse()
  .map((n, i) => n * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ")
}
