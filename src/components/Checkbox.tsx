import { CheckCircledIcon, ValueIcon } from "@radix-ui/react-icons";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  value: string;
  size?: number;
}

const Checkbox = ({ checked, onChange, value, size = 18 }: CheckboxProps) => {
  return (
    <div className="flex">
      <label>
        {checked ? (
          <CheckCircledIcon width={size} height={size} />
        ) : (
          <ValueIcon width={size} height={size} />
        )}
        <input type="checkbox" hidden value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Checkbox;
