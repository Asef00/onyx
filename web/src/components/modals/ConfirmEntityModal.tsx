import Modal from "@/refresh-components/layouts/ConfirmationModalLayout";
import Button from "@/refresh-components/buttons/Button";
import Text from "@/refresh-components/texts/Text";
import { SvgAlertCircle } from "@opal/icons";
import type { IconProps } from "@opal/types";

export interface ConfirmEntityModalProps {
  danger?: boolean;

  onClose: () => void;
  onSubmit: () => void;

  icon?: React.FunctionComponent<IconProps>;

  entityType: string;
  entityName: string;

  additionalDetails?: string;

  action?: string;
  actionButtonText?: string;

  removeConfirmationText?: boolean;

  deleteLabel?: string;
  confirmLabel?: string;
  deleteActionLabel?: string;
  confirmActionLabel?: string;
  confirmationText?: string;
}

export function ConfirmEntityModal({
  danger,

  onClose,
  onSubmit,

  icon: Icon,

  entityType,
  entityName,

  additionalDetails,

  action,
  actionButtonText,

  removeConfirmationText = false,

  deleteLabel,
  confirmLabel,
  deleteActionLabel,
  confirmActionLabel,
  confirmationText,
}: ConfirmEntityModalProps) {
  const buttonText = actionButtonText
    ? actionButtonText
    : danger
      ? deleteLabel || "Delete"
      : confirmLabel || "Confirm";
  const actionText = action
    ? action
    : danger
      ? deleteActionLabel || "delete"
      : confirmActionLabel || "modify";

  return (
    <Modal
      icon={Icon || SvgAlertCircle}
      title={`${buttonText} ${entityType}`}
      onClose={onClose}
      submit={
        <Button onClick={onSubmit} danger={danger}>
          {buttonText}
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        {!removeConfirmationText && (
          <Text as="p">
            {confirmationText
              ? confirmationText.replace("{entityName}", entityName).replace("{actionText}", actionText)
              : (
                  <>
                    Are you sure you want to {actionText} <b>{entityName}</b>?
                  </>
                )}
          </Text>
        )}

        {additionalDetails && (
          <Text as="p" text03>
            {additionalDetails}
          </Text>
        )}
      </div>
    </Modal>
  );
}
