import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function CostomizeAppBar({
  title,
  onClickIconButton,
}: {
  title: string;
  onClickIconButton: (value: boolean) => void;
}) {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            onClickIconButton(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default CostomizeAppBar;
