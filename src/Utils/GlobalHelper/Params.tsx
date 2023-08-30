type param = { param: string; value: string };

export const Params = (params: param[]): string => {
  let finalValue: string = "?";
  params.map((p) => {
    finalValue = finalValue + p.param + "=" + p.value + "&";
  });
  return finalValue.slice(0, -1);
};
