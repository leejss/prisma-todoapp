import { CheckCircledIcon, ValueIcon } from "@radix-ui/react-icons";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  value: string;
}

const Checkbox = ({ checked, onChange, value }: CheckboxProps) => {
  return (
    <div className="flex;">
      <label>
        {checked ? (
          <CheckCircledIcon width={24} height={24} />
        ) : (
          <ValueIcon width={24} height={24} />
        )}
        <input type="text" hidden value={value} onChange={() => {}} />
      </label>
    </div>
  );
};

export default Checkbox;
