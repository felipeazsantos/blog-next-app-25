'use server';

import { asyncDelay } from '@/utils/async-delay';

export async function deletePostAction(id: string) {
  await asyncDelay(3000);

  return id;
}
