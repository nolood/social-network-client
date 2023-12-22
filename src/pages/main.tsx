import { type FC } from "react";
import { Chats } from "~/widgets";
import { PageLayout } from "~/shared/ui";

const Main: FC = () => {
  return (
    <PageLayout>
      <Chats />
    </PageLayout>
  );
};

export default Main;
