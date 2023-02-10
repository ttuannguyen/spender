class NotesController < ApplicationController
    def index
        render json: Note.all
    end     

    def show
        note = Note.find_by(id: params[:id])
        if note 
            render json: note.to_json, status: :ok 
        else 
            render json: { error: "Note not found", status: :unauthorized} 
        end
    end

    def create
        expense = current_user.expenses.find_by(id: params[:expense_id])
        # expense = Expense.find_by(id: params[:expense_id])
        note = expense.notes.create!(note_params)
        render json: note, status: :created
    end

    # DELETE
    def destroy
        expense = current_user.expenses.find_by(id: params[:expense_id])
        # expense = Expense.find_by(id: params[:expense_id])
        note = expense.notes.find_by(id: params[:id])
        note.destroy
        head :no_content
    end

    private
    def note_params
        params.permit(:content, :expense_id)
    end

end
