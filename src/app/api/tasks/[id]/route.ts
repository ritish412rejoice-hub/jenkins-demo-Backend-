import { NextResponse } from 'next/server';
import { updateTask, deleteTask } from '@/lib/store';

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const updated = updateTask(id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: `Task with id '${id}' not found.` },
        { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Task updated successfully', data: updated },
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to process update request.' },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const success = deleteTask(id);

    if (!success) {
      return NextResponse.json(
        { success: false, error: `Task with id '${id}' not found.` },
        { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Task deleted successfully', deletedId: id },
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to delete task.' },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
