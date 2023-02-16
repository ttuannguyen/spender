class NotesController < ApplicationController
    def index
        render json: current_user.notes
    end     

    def show
        note = Note.find_by(id: params[:id])
        if note 
            render json: note, status: :ok 
        else 
            render json: { error: "Note not found", status: :unauthorized} 
        end
    end

    def create
        # expense = current_user.expenses.find_by(id: params[:expense_id])
        # expense = Expense.find_by(id: params[:expense_id])
        note = current_user.notes.create!(note_params)
        render json: note, status: :created
    end

    # # DELETE
    # def destroy
    #     expense = current_user.expenses.find_by(id: params[:expense_id])
    #     # expense = Expense.find_by(id: params[:expense_id])
    #     note = expense.notes.find_by(id: params[:id])
    #     note.destroy
    #     head :no_content
    # end

    private
    def note_params
        params.permit(:content)
    end

end
