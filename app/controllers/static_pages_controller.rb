class StaticPagesController < ApplicationController

  def root
    render html: "<div id=\"content\">hi</div>".html_safe
  end

end
