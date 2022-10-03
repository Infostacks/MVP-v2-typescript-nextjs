import Header from "../../components/ChatScreen/Header";
import Conversation from "../../components/ChatScreen/Conversation";
import ChatArea from "../../components/ChatScreen/ChatArea";
const index = () => {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Conversation />
        <ChatArea />
      </div>
    </div>
  );
};

export default index;
