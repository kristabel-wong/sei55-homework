class TheCompanyController < ApplicationController

    def home
    end # closes home
# -------------------------------------------------------- #
    # CREATE
    #1
    def new
        @employee = Employee.new
    end



    #2
    def create

        Planet.create(

            name:                   params[:employee][:string ],
            image_url:              params[:employee][:text   ],
            dob:                    params[:employee][:date   ],
            address:                params[:employee][:string ],
            gender:                 params[:employee][:string ],
            start_date:             params[:employee][:date   ],
            contract:               params[:employee][:boolean],
            full_time:              params[:employee][:boolean],
            months_emp:             params[:employee][:integer],
            sick_days_accrued:      params[:employee][:integer],
            sick_days_taken:        params[:employee][:integer],
            leave_accrued_hours:    params[:employee][:integer],
            leave_take_hours:       params[:employee][:integer],
            end_date:               params[:employee][:date   ]
          


        )

    end



# -------------------------------------------------------- #
    # READ
    #1
    def index

        @employees = Employee.all
        
    end # close index
    #2
    def show
        
        @employee = Employee.find params[:id]

    end # close show
# -------------------------------------------------------- #
    #UPDATE
    #1
    def update
        
    end






# -------------------------------------------------------- #


end #closes TheCompanyController