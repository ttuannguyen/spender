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


    
end
