import { useRef, useState } from "react";
import { ChatConversations } from "./ChatConversations";
import { ChatInput } from "./ChatInput";
import { IChatUIProps } from "./types";
import { predefinedQuestions } from "@/app/data";

export const ChatUI = ({
  disabled,
  conversations,
  isQuerying,
  customSubmitIcon,
  placeholder,
  onSubmit,
}: IChatUIProps) => {
  const chatConversationsContainerRef = useRef<HTMLDivElement>(null);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(true);

  const handlePredefinedQuestion = (question: string) => {
    if (onSubmit) {
      onSubmit(question);
      setButtonsVisible(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        ref={chatConversationsContainerRef}
        className="flex-grow overflow-y-auto pb-20"
      >
        <ChatConversations
          conversations={conversations}
          isQuerying={isQuerying}
          chatConversationsContainerRef={chatConversationsContainerRef}
        />
      </div>

      {buttonsVisible && (
        <div className="flex space-x-4 mb-20">
          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handlePredefinedQuestion(question)}
              className="border border-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      <div className="w-full fixed bottom-0 border-t border-gray-300"> {/* ChatInput alanının arka planını beyaz yap */}
        <ChatInput
          disabled={disabled}
          customSubmitIcon={customSubmitIcon}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
