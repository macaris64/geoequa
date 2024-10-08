import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faRobot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button } from "react-daisyui";
import { IChatMessageProps } from "./types";
import { MessageRole } from "./enums/MessageRole";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";

export const ChatMessage = ({ message }: IChatMessageProps) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [, copy] = useCopyToClipboard();

  const isBot = message.role !== MessageRole.USER;

  const formatMessage = (msg: string) => {
    return msg
      .replace(/`{3}([^\n]*)([\s\S]*?)`{3}/g, '<pre class="code-block"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, "<br/>");
  };

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <Avatar shape="circle" className="mr-4">
          <div className="bg-neutral text-neutral-content h-10 w-10">
            {isBot ? (
              <FontAwesomeIcon icon={faRobot} />
            ) : message.userInfo?.firstName && message.userInfo?.lastName ? (
              <span>{`${message.userInfo.firstName.charAt(
                0
              )}${message.userInfo.lastName.charAt(0)}`}</span>
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </div>
        </Avatar>
        <h4 className="font-semibold select-none">{isBot ? "Assistant" : "You"}</h4>
      </div>
      <div className="ml-16 mt-4">
        <div
            ref={messageRef}
            className={`whitespace-pre-wrap ${isBot ? "text-blue-400" : "text-white"}`}
            dangerouslySetInnerHTML={{__html: formatMessage(message.message)}}
        />
        {isBot && (
            <div className="mt-4">
              <Button size="sm" shape="square" color="ghost">
                <FontAwesomeIcon
                    icon={faClipboard}
                    onClick={() => copy(messageRef?.current?.innerHTML || "")}
                />
              </Button>
            </div>
        )}
      </div>
    </div>
  );
};
