// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(part1) {
  return function (part2) {
    return `You are ${part1}${part2}${part1}!`;
  };
};
