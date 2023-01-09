import { TabsStyled, TabStyled } from './profile-tabs.styled';

export interface Tab {
  id: number;
  label: string;
  icon: JSX.Element;
}

export interface ProfileTabsProps {
  tabs: Tab[];
  value: number;
  onChange: (value: number) => void;
}

function ProfileTabs({
  tabs,
  value,
  onChange,
  ...otherProps
}: ProfileTabsProps) {
  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    onChange(newValue);
  };

  return (
    <TabsStyled
      aria-label="scrollable prevent tabs example"
      onChange={handleChange}
      scrollButtons={false}
      value={value}
      variant="scrollable"
      {...otherProps}
    >
      {tabs.map((tab) => (
        <TabStyled key={tab.id} icon={tab.icon} label={tab.label} />
      ))}
    </TabsStyled>
  );
}

export default ProfileTabs;
