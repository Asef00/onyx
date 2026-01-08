import IconButton from "@/refresh-components/buttons/IconButton";
import { SvgTrash } from "@opal/icons";

export interface DeleteButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
  disabled?: boolean;
  tooltip?: string;
}

export function DeleteButton({
  onClick,
  disabled,
  tooltip = "Delete",
}: DeleteButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      icon={SvgTrash}
      tooltip={tooltip}
      disabled={disabled}
      internal
    />
  );
}
