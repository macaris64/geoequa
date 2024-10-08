import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef } from "react";
import { Button, Textarea } from "react-daisyui";
import { IChatInputProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChatInput = ({
  disabled,
  onSubmit,
  placeholder,
  customSubmitIcon,
}: IChatInputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const textArea = textAreaRef?.current;
      if (textArea && textArea.value.trim().length > 0) {
        if (onSubmit) {
          onSubmit(textArea.value);
        }
        textArea.value = "";
      }
    },
    [onSubmit]
  );

  const handleEnterKey = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  return (
    <div className="flex justify-center items-center">
      <Textarea
        ref={textAreaRef}
        bordered
        className={`resize-none w-full max-h-48 overflow-y-auto bg-background`}
        onKeyUp={handleEnterKey}
        placeholder={placeholder ? placeholder : "Type here to chat"}
        disabled={disabled}
        style={{ padding: "10px 0 10px 10px" }}
      ></Textarea>
      <Button
        shape={"square"}
        className="absolute ml-[95%]"
        disabled={disabled}
        onClick={handleSubmit}
      >
        {customSubmitIcon ? (
          customSubmitIcon
        ) : (
          <FontAwesomeIcon icon={faMagicWandSparkles} />
        )}
      </Button>
    </div>
  );
};
