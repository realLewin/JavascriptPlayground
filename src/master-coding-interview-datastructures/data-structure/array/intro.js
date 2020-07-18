let days = ["monday", "tuesday", "webnesday", "thursday"];

// Access array member:
// Time complexity: O(1);
// Array access members directly when using index;
const myDay = days[2];
log(myDay);

// remove or add member to the end of array;
// O(1);
days.push("friday");
days.pop();
log();

// Remove or add member to the begin of array;
// O(n);
// Because this need shift member's index when add or remove first member;
days.unshift("sunday");
days.shift();
log();

// Insert or delete member to certain position of array;
// O(n);
// Insert or delete then shift the index;
// Insert friday to index [3], and delete 0 member;
days.splice(4, 0, "friday");
log();

//the helper function;
function log(arg = null) {
  if (arg != null) {
    console.log(arg);
  } else {
    console.log(days);
  }
}
