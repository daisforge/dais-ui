export function autoFocusAndSelect<
  T extends HTMLInputElement | HTMLTextAreaElement | null
>(input: T | null) {
  input?.focus();
  input?.select();
}
export function autoFocus<
  T extends HTMLInputElement | HTMLTextAreaElement | null
>(input: T | null) {
  input?.focus();
  input?.setSelectionRange(input.value.length, input.value.length);
}
