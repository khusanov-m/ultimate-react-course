import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addEditCabin } from "../../services/apiCabins";

export function useAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isLoading: isAdding } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully added!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addCabin, isAdding };
}
