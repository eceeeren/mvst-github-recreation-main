import { SelectPanel, Button } from '@primer/react';
import React from 'react';
import { TriangleDownIcon } from '@primer/octicons-react';


export default function SpecializedSelectPanel(props) {

  const [selected, setSelected] = React.useState([props.items[0]])
  const [filter, setFilter] = React.useState('')
  const filteredItems = props.items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()))
  const [open, setOpen] = React.useState(false)

  return (
    <SelectPanel
      renderAnchor={({children, 'aria-labelledby': ariaLabelledBy, ...anchorProps}) => (
        <Button trailingAction={TriangleDownIcon} aria-labelledby={` Type: ${ariaLabelledBy}`} {...anchorProps}>
          {children}
        </Button>
      )}
      open={open}
      onOpenChange={setOpen}
      items={filteredItems}
      selected={selected}
      onSelectedChange={setSelected}
      onFilterChange={setFilter}
      showItemDividers={true}
      overlayProps={{width: 'small', height: 'xsmall'}}
    />
  );
}