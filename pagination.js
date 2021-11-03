//Pagination is simple language function. Pagination just gives varables in scope to another scope in main scope, for example
// in general function "pagination" we can gives, varable dom to child function "fn". Pagination only works into down direction.

const pagination = function(){
    let dom = "Dominik";
    console.log(dom);

    function fn(){
        let result;
        result = `${dom} Rasiński`;

        return result;
    }
    console.log(fn());
}

pagination();