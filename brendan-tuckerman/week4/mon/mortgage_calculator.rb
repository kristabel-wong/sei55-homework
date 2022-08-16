# Bonus
# Mortgage Calculator

# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

#####support gems#######
require 'colorize'

#### Calculator Main Menu #####
def mort_calculator_menu 
    running = true
    while running
        
        puts "\n\n*****MAIN MENU*********".red
        puts"\n\nWelcome to the mortgage calculator. Press 'q' to exit."
        print "What is the value of your loan?   $"
        total_loan = gets.chomp
            if total_loan[0] == 'q'
                running = false
                break
            end #end if
        print "How much can you afford to pay each month?   $"
        monthly_payments  = gets.chomp
            if monthly_payments[0] == 'q'
                running = false
                break
            end #end if

        print "What is your annual interest rate percentage? (e.g. 1.4)    %"
        interest_rate = gets.chomp.to_f
        puts "Interest here is #{interest_rate}"
            # if interest_rate[0] = 'q'
            #     running = false
            # end #end if
        
        monthly_payments = monthly_payments.to_f
        total_loan = total_loan.to_f
       
        #use these inputs to detemrine how many years

        puts "This is the mthly interes #{interest_rate}"

        puts "\n\nWith a total loan of $#{total_loan}, paying $#{monthly_payments} per month at %#{interest_rate}, it will take you #{ calculate_months(total_loan, monthly_payments, interest_rate)} months to repay this loan. In this time you will pay $#{calculate_interest(total_loan, monthly_payments, interest_rate)} in interest."
        

    
    end #end running

end #end mortgage calc

#Todo: account for situations where the mthly payments are not enough to cover the total to avoid infinite lopop
def calculate_months(total_loan, monthly_payments, interest_rate)
    months = 0
    puts "Total loan #{total_loan}"
    interest =  (interest_rate / 100) /12
    until total_loan < 0 #keeps simulating payments until loan is goin
        if months > 1200  #for loans that can never be repaid at this rate
            puts "You will never pay this off"
            break
        else

            monthly_interest = total_loan * interest
            total_loan += monthly_interest
            puts "This month's interest is #{monthly_interest}"
            puts "Total loan is now #{total_loan}"
            total_loan -= monthly_payments
            puts "After payment loan is #total_loan}."
            months += 1
            puts "months is now #{months}"
        end
     
    end
    months 

end #end calculate years

def calculate_interest(total, monthly_payments, interest_rate)
    total_interest_paid = 0
    months = 0
    interest =  (interest_rate / 100) /12
    until total < 0 #keeps simulating payments until loan is goin
        if months > 1200  #for loans that can never be repaid at this rate
            puts "You will never pay this off"
            break
        
        else

            monthly_interest = total * interest
            total_interest_paid += monthly_interest
            total += monthly_interest
            total -= monthly_payments
            months += 1
        end
     
    end
    total_interest_paid.round(2)
end #end interest


##initialise###
mort_calculator_menu