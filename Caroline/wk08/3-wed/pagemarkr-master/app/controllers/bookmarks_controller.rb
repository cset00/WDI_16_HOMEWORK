class BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.order(:title)
    @bookmark = Bookmark.new
    # @MetaInspector = MetaInspector.new(bookmark_params).url.title
    # if 
    @sportskeep = MetaInspector.new('http://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=404&s=8329&t=3730&embedded=').to_s
      

    # end
      
  end

  def new
    @bookmark = Bookmark.new
  end

  def create
    # @bookmark = Bookmark.new
    # @bookmark.url = params[:url]
    # instead of the above lines, we could do a mass assignment (see below inc the method)
   
    @bookmark = Bookmark.new(bookmark_params)
    # the above is important for mass assignment

    @bookmark.title = MetaInspector.new(@bookmark.url).best_title
    if @bookmark.save
      redirect_to '/bookmarks'
    else
      render :new # render a template
    end
  end

  def track
    Bookmark.increment_counter(:click_count, params[:id])
    redirect_to params[:url]

  end


  def show
    # atomic operation. you want database to have an atomic operation.
    Bookmark.increment_counter(:click_count, params[:id]) # this line replaces and improves on the below 3 commented out lines

    # below works sometimes, but not always. especially when you have multiple users clicking at the same time.
    # @bookmark = Bookmark.find( params[:id] )
    # @bookmark.click_count += 1
    # @bookmark.save

    redirect_to Bookmark.find(params[:id]).url 
  end

  def destroy
    @bookmark = Bookmark.find( params[:id] )
    if @bookmark.destroy
      redirect_to '/bookmarks'
    else
      render :show
    end
  end

  def archive
    @bookmark = Bookmark.find(params[:id])
    
    @bookmark.archived = 'true'
    
    if @bookmark.save
      redirect_to '/archived'
    end
  end

  def unarchive
    @bookmark = Bookmark.find(params[:id])
    
    @bookmark.archived = 'false'
    
    if @bookmark.save
      redirect_to '/bookmarks'
    end
  end

  def edit
    @bookmark = Bookmark.find( params[:id ] )
    render :edit
  end

  def update
    @bookmark = Bookmark.find( params[:id] )
    @bookmark.url = params[:url]
    if @bookmark.save
      redirect_to "/bookmarks/#{@bookmark.id}"
    else
      render :edit
    end
  end


  #-----

  def bookmark_params
    params.require(:bookmark).permit(:url, :title)
  end

  #-----

  def recent
    @bookmarks = Bookmark.recently_added
    render :index
  end

  def archived
    @bookmarks = Bookmark.archived
    render :index
  end

  def neglected
    @bookmarks = Bookmark.neglected
    render :index
  end

end
