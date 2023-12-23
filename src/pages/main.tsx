import { type FC } from "react";
import { ChatsList, SearchBar } from "~/widgets";
import { PageLayout } from "~/shared/ui";
import ChatBlock from "~/widgets/chats/ui/chat-block";

const Main: FC = () => {
  return (
    <PageLayout>
      <div className="bg-ctp-base rounded-[6px] w-[30%] min-w-[500px] h-full flex flex-col">
        <SearchBar />
        <ChatsList />
      </div>
      <ChatBlock />
    </PageLayout>
  );
};

export default Main;
