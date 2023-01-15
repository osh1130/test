// 定义默认数据
const defaultState = {
    //sarr:[{ name: "ztt111", password : "11111"}]
    Articlearr:[{title:"title",subtitle:"subtitle",content:"content",id:1}],
    Userarr:[{ name: "ztt111", token : "11111"}]
}

// 导出一个函数
// eslint-disable-next-line
export default (state=defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "changeArticleData":
            //newState.sarr.push(111);
            newState.Articlearr=action.value;
            console.log(newState);
            break;
        case "changeUserData":
            //newState.sarr.push(111);
            newState.Userarr=action.value;
            //console.log(newState);
            break;
        default:
            //console.log(newState);
            break;
    }
    return newState;
}