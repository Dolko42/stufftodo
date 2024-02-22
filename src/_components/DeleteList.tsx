import type { Stufflist } from "@prisma/client";
import { deleteStufflist } from "~/app/api/todo/actions";
import { DeleteListButton } from "./ListButtons";

type DeleteListProps = {
  currentList: Stufflist;
};

const DeleteList: React.FC<DeleteListProps> = ({ currentList }) => {
  const listId = currentList.id.toString();

  return (
    <>
      <form
        action={deleteStufflist.bind(null, listId)}
        className="flex flex-row"
      >
        <input type="hidden" name="id" required value={listId} />
        <DeleteListButton />
      </form>
    </>
  );
};
export default DeleteList;
