'use server';

export async function deletePostAction(formData: FormData) {
  const id = formData.get('id')?.toString();
  console.log(id);
}
