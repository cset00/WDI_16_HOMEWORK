class PlanetsController < ApplicationController
    def home
        @planets = Planet.all
        @planet = Planet.new
    end

    def new
        @planet = Planet.new
    end

    def create
        @planet = Planet.new
        @planet.name = params[:name]
        @planet.description = params[:description]
        @planet.distance_fr_earth = params[:distance_fr_earth]
        @planet.save

        if @planet.save
            redirect_to '/'
        else
            render :new
        end 
    end

    def show
        @planet = Planet.find(params[:id])
    end

    def edit
        @planet = Planet.find(params[:id])
    end

    def update
        @planet = Planet.find(params[:id])
        @planet.name = params[:name]
        @planet.description = params[:description]
        @planet.distance_fr_earth = params[:distance_fr_earth]
        
        if @planet.save
            redirect_to '/'
        else
            render :edit
        end
    end

    def destroy
        @planet = Planet.find(params[:id])
        if @planet.destroy
            redirect_to '/'
        else
            render :show
        end
    end
end
