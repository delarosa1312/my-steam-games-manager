// src/components/shared/advanced-table/EditDialog.tsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useState } from "react";

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  game: any;
  onSave: (updatedGame: any) => void;
}

const EditDialog = ({ open, onClose, game, onSave }: EditDialogProps) => {
  const [editedGame, setEditedGame] = useState(game);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedGame((prevGame: any) => ({ ...prevGame, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedGame);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Game</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Game Name"
          name="name"
          value={editedGame.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Playtime (hours)"
          name="playtime_forever"
          value={editedGame.playtime_forever}
          onChange={handleChange}
          fullWidth
        />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
