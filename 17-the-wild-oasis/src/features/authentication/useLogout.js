import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutApi,
    onSuccess: () => {
      // ! SHOULD NOT BE LIKE THIS, BUT NOT WORKING WHITHOUT IT
      localStorage.removeItem("sb-ghhxycwnpjvawmpvuedy-auth-token");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
