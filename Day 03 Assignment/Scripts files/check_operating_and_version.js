osname=prompt('enter os name with version using space');
console.log(osname);
arr=osname.split(" ");
console.log(arr);
console.log("The os is "+arr[0]+" and the version is" +arr[1]);