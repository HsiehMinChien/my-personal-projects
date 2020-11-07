import { withRouter } from "next/router";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const DrawerItemList = [
  { text: "手機數字分析", path: "/" },
  { text: "日曆計價表", path: "/count-stock-price" },
];

function CostomizeDrawer({
  router,
  isOpen,
  onClickListItem,
}: {
  router: any;
  isOpen: boolean;
  onClickListItem: (value: boolean) => void;
}) {
  const { push } = router;
  return (
    <Drawer open={isOpen}>
      <div role="presentation">
        <List>
          {DrawerItemList.map((data, index) => (
            <ListItem
              button
              key={data.text}
              onClick={() => {
                onClickListItem(false);
                push(data.path);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default withRouter(CostomizeDrawer);
