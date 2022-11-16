import TodoStore from "./component/ClassComponent/index";

export default function App() {

  function myFunction(param){
     param('học lập trình')
  }

  function myCallBack(value) {
    console.log('Value: ',value)
  }

  myFunction(myCallBack)


  return (
    <>
     <TodoStore />
    </>
  );
}
