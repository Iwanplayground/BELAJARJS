var member = ["bambang", "rifqi", "iwan"];

member.forEach((member) => {
  console.log(member);
});

// kalo mau lebih dari 1 param ya masukin dianya kedalam kurung
member.forEach((member, index) => {
  console.log(member + " " + index);
});
