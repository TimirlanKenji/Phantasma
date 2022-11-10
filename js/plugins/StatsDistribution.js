#==============================================================================
# ** TDS Stat Distribution
#    Ver: 1.8
#------------------------------------------------------------------------------
#  * Description:
#  This script allows you to set and change a character's parameters from a 
#  custom menu.
#------------------------------------------------------------------------------
#  * Features: 
#  Change character stats(Parameters).
#  Setting unique stat boosting caps for characters.
#  Setting unique stat increases for characters.
#------------------------------------------------------------------------------
#  * Instructions:
#
#  To gain or lose parameter points, use this in a script call from an event:
#
#    gain_param_points(actor_id, value)
#    lose_param_points(actor_id, value)
#
#    actor_id = ID of actor to gain or lose param points
#    value = amount of param points to gain or lose
#
#    Example:
#
#    gain_param_points(1, 100)    
#
#    lose_param_points(1, 50)
#
#  To set the amount of parameter change points obtained for a character, add this
#  to to the actor's note box:
#
#    <Level_UP_Change_Points: V>
#
#    V = Amount of points to gain everytime the actor levels up.
#
#    Example:
#
#    <Level_UP_Change_Points: 10>
#
#  To set the parameters that can be changed on a character add this to the
#  actor's note box:
#
#    <Change_PARAMS: P, P, P, P, P>
#
#    P = Parameter ID. The Id of the parameter from 0 to 7.
#   
#    Example: 
#
#    <Change_PARAMS: 0, 1, 2, 3, 4, 5, 6, 7>
#
#  To set the amount of parameter change for spent each parameter point add this
#  to the actor's note box:
#
#    <PARAM_"PNAME"_Value: Value>
#
#    "PNAME" = Parameter short name. (HP, MP, ATK, DEF, MAT, MDF, AGI, LUK)
#    Value = Parameter change value. (Amount to increase per point)
#
#    Example:
#
#    <PARAM_HP_Value: 10>
#    <PARAM_ATK_Value: 1>
#
#  To set the parameter cap for a character, add this to the actor's note box:
#
#    <PARAM_"PNAME"_Cap: Value>
#
#    "PNAME" = Parameter short name. (HP, MP, ATK, DEF, MAT, MDF, AGI, LUK)
#    Value = Parameter cap value.
#
#    Example:
#
#    <PARAM_HP_Cap: 9999>
#    <PARAM_ATK_Cap: 300>
#------------------------------------------------------------------------------
#  * Notes:
#  Paremeter ID List:
#    0: HP - Hit Points  (HP)
#    1: MP - Magic Ponts (MP)
#    2: Attack  (ATK)
#    3: Defense (DEF)
#    4: Magic Attack Power  (MAT)
#    5: Magic Defense Power (MDF)
#    6: Agility (AGI)
#    7: Luck (LUK)
#------------------------------------------------------------------------------
# WARNING:
#
# Do not release, distribute or change my work without my expressed written 
# consent, doing so violates the terms of use of this work.
#
# I also reserve the right to deny permission to any individual or group from
# using any of my work.
#
# If you really want to share my work please just post a link to the original
# site.
#
# * Not Knowing English or understanding these terms will not excuse you in any
#   way from the consequenses.
#==============================================================================
# * Import to Global Hash *
#==============================================================================
($imported ||= {})[:TDS_Stat_Distribution] = true

#==============================================================================
# ** TDS
#------------------------------------------------------------------------------
#  A module containing TDS data structures, mostly script settings.
#==============================================================================

module TDS
  #============================================================================
  # ** Stat_Change_Settings
  #----------------------------------------------------------------------------
  #  This Module contains stat change settings and setting related method.
  #============================================================================  
  module Stat_Change_Settings
    #--------------------------------------------------------------------------
    # * Constants (Features)
    #--------------------------------------------------------------------------  
    # Parameter Full Names
    Param_Names = ["Max HP", "Max MP","Attack", "Defense", "Magic Attack",
                   "Magic Defense", "Agility", "Luck"]
    # Parameter Help Text
    Param_Help_Text = [
    "Max value of HP.",
    "Max value of MP.",
    "Affects amount of damage dealt mainly by physical attacks.",
    "Affects amount of damage suffered mainly from physical\nattacks.",
    "Affects amount of damage dealt mainly by magic attacks.",
    "Affects amount of damage suffered mainly from magic attacks.",
    "Agility AGI Determines action order during a turn.",
    "Affects chance of adding state or debuffing a parameter ",
    ]
    # Default Parameter Cap (If nil it will use default max)
    Default_Param_Cap = {} # {0 => 9999, 1 => 999}
    # Changeable Parameters (0~7)(Parameters that can be modified)
    Changeable_Param = [*0...8]
    # Parameter Points Name
    Param_Points_Name = "Param Points"
    # Level Up Parameter Change Point Gain
    Level_Up_Param_Points_Gain = 1
    # Allow for Parameter Points to be exchanged back once spent
    Allow_Param_Point_Takeback = true
    # Parameter Gradient Bar Colors
    Param_Colors = [
      [Color.new(224, 128, 64), Color.new(240, 192, 64)],
      [Color.new(64, 128, 192), Color.new(64, 192, 240)],      
      [Color.new(46, 0, 29), Color.new(221, 0, 94)],
      [Color.new(46, 21, 0), Color.new(221, 146, 0)],
      [Color.new(2, 0, 46),  Color.new(0,221, 99)],
      [Color.new(29, 0, 46), Color.new(221, 0, 213)],
      [Color.new(63, 4, 62), Color.new(80, 138, 255)],  
      [Color.new(46, 0, 37), Color.new(221, 198, 0)],  
    ]
    #--------------------------------------------------------------------------
    # * Get Parameter Full Name
    #     parameter : parameter index
    #--------------------------------------------------------------------------
    def self.param_full_name(parameter) ; Param_Names.at(parameter) end    
    #--------------------------------------------------------------------------
    # * Get Parameter Help Text
    #     parameter : parameter index
    #--------------------------------------------------------------------------
    def self.param_help_text(parameter) ; Param_Help_Text.at(parameter) end      
    #--------------------------------------------------------------------------
    # * Get Parameter Gradient Colors
    #     parameter : parameter index
    #--------------------------------------------------------------------------
    def self.param_colors(parameter) ; Param_Colors.at(parameter) end
  end
end


#==============================================================================
# ** Game_Interpreter
#------------------------------------------------------------------------------
#  An interpreter for executing event commands. This class is used within the
# Game_Map, Game_Troop, and Game_Event classes.
#==============================================================================

class Game_Interpreter
  #--------------------------------------------------------------------------
  # * Gain or Lose Parameter Points
  #     actor_id : ID of Actor
  #     value    : parameter value
  #--------------------------------------------------------------------------
  def gain_param_points(actor_id, value = 1) ; $game_actors[actor_id].add_stat_change_point(value) end
  def lose_param_points(actor_id, value = 1) ; $game_actors[actor_id].remove_stat_change_point(value) end    
end


#==============================================================================
# ** Game_Actor
#------------------------------------------------------------------------------
#  This class handles actors. It is used within the Game_Actors class
# ($game_actors) and is also referenced from the Game_Party class ($game_party).
#==============================================================================

class Game_Actor < Game_Battler
  #--------------------------------------------------------------------------
  # * Public Instance Variables
  #--------------------------------------------------------------------------
  attr_accessor :stat_change_points       # Parameters Stat Change Points  
  attr_accessor :stat_change_spent_points # Parameters Stat Change Spent Points    
  attr_accessor :stat_change_params       # Parameters That can be modified    
  attr_accessor :stat_change_cap          # Parameters Stat Change Caps
  attr_accessor :stat_change_value        # Parameters Stat Change Increase Value
  #--------------------------------------------------------------------------
  # * Alias Listing
  #--------------------------------------------------------------------------
  alias tds_status_distribution_game_actor_setup                     setup
  alias tds_status_distribution_game_actor_level_up                  level_up
  #--------------------------------------------------------------------------
  # * Setup
  #--------------------------------------------------------------------------
  def setup(*args, &block)
    # Run Original Method
    tds_status_distribution_game_actor_setup(*args, &block)
    # Initialize Stat Changes
    init_stat_changes
  end
  #--------------------------------------------------------------------------
  # * Get Base Value of Parameter with Bonus
  #--------------------------------------------------------------------------
  def param_base_with_plus(param_id) ; param_base(param_id) + @param_plus[param_id] end
  #--------------------------------------------------------------------------
  # * Level Up
  #--------------------------------------------------------------------------
  def level_up(*args, &block)
    # Run Original Method
    tds_status_distribution_game_actor_level_up(*args, &block)
    # Add Stat Point
    add_stat_change_point(@stat_change_level_points)
  end
  #--------------------------------------------------------------------------
  # * Initialize Stat Change Values
  #--------------------------------------------------------------------------
  def init_stat_changes
    # Stat Change Points
    @stat_change_points = 0
    # Stat Change Spent Points Array
    @stat_change_spent_points = Array.new(8, 0)    
    # Setup Stat Change Parameters, Values and Changes
    setup_stat_change_parameters ; setup_stat_change_values ; setup_stat_change_caps
    setup_stat_level_up_points
  end
  #--------------------------------------------------------------------------
  # * Add/Remove Stat Change Point
  #     value : parameter index
  #--------------------------------------------------------------------------
  def add_stat_change_point(value = 1) ; @stat_change_points  = [@stat_change_points + value, 0].max end  
  #--------------------------------------------------------------------------
  # * Remove Stat Change Point
  #     value : parameter index
  #--------------------------------------------------------------------------  
  def remove_stat_change_point(value = -1) ; add_stat_change_point(-value) end      
  #--------------------------------------------------------------------------
  # * Get Cap Value for Parameter
  #     parameter : parameter index
  #--------------------------------------------------------------------------
  def param_cap(parameter) ; @stat_change_cap.at(parameter) end
  #--------------------------------------------------------------------------
  # * Get Value Increase Per Point for Parameter
  #     parameter : parameter index
  #--------------------------------------------------------------------------
  def param_increase_value(parameter) ; @stat_change_value.at(parameter) end  
  #--------------------------------------------------------------------------
  # * Setup Stat Level Up Points (Amount to gain per level)
  #--------------------------------------------------------------------------
  def setup_stat_level_up_points
    # Amount of Stat Change Points to get per level
    @stat_change_level_points = TDS::Stat_Change_Settings::Level_Up_Param_Points_Gain
    # Match Text for Parameter Change Points per level
    actor.note[/<Level_UP_Change_Points: (\d+)>/i]
    # Set Stat Change Points Per Level UP
    @stat_change_level_points = $1.to_i if !$1.nil?
  end
  #--------------------------------------------------------------------------
  # * Setup Initial Parameter Stat Change Values (Amount to increase per level)
  #--------------------------------------------------------------------------
  def setup_stat_change_parameters
    # Stat Change Parameters (Parameters that can be changed)
    @stat_change_params = TDS::Stat_Change_Settings::Changeable_Param
    # Match Text for Change Parameters
    actor.note[/<Change_PARAMS: (.+)>/i]
    # Set Change Parameters if not nil
    @stat_change_params = $1.split(/,/).collect {|id| id.to_i} if !$1.nil?
  end
  #--------------------------------------------------------------------------
  # * Setup Initial Parameter Stat Change Values (Amount to increase per level)
  #--------------------------------------------------------------------------
  def setup_stat_change_values
    # Initialize Stat Change Increase Value (Amount to increase per level)
    @stat_change_value = Array.new(8, 1)
    # Go Through Basic Parameters
    ["HP", "MP", "ATK", "DEF", "MAT", "MDF", "AGI", "LUK"].each_with_index {|param,i|
      # Match Text for Parameter cap
      actor.note[/<PARAM_#{param}_Value: (\d+)>/i]
      # Set Stat Change Cap
      @stat_change_value[i] = $1.to_i if !$1.nil?
    }    
  end
  #--------------------------------------------------------------------------
  # * Setup Initial Parameter Stat Change Caps
  #--------------------------------------------------------------------------
  def setup_stat_change_caps
    # Create Stat Change Cap Array
    @stat_change_cap = 8.times.collect {|id|
      # Get Default Parameter Cap
      cap = TDS::Stat_Change_Settings::Default_Param_Cap[id]
      # Set Cap
      cap = cap.nil? ? param_max(id) : cap
    }    
    # Go Through Basic Parameters
    ["HP", "MP", "ATK", "DEF", "MAT", "MDF", "AGI", "LUK"].each_with_index {|param,i|
      # Match Text for Parameter cap
      actor.note[/<PARAM_#{param}_Cap: (\d+)>/i]
      # Set Stat Change Cap
      @stat_change_cap[i] = $1.to_i if !$1.nil?
    }
  end
end


#==============================================================================
# ** Scene_Status_Distribution
#------------------------------------------------------------------------------
#  This class performs the status distribution processing.
#==============================================================================

class Scene_Status_Distribution < Scene_MenuBase
  #--------------------------------------------------------------------------
  # * Start Processing
  #--------------------------------------------------------------------------
  def start
    super
    # Create Windows
    create_help_window ; create_actor_status_window ; create_actor_stat_points_window
    create_controls_window ; create_status_change_window ; create_status_change_prompt_window ; 
  end
  #--------------------------------------------------------------------------
  # * Create Actor Status Window
  #--------------------------------------------------------------------------
  def create_actor_status_window
    # Create Actor Status Window
    @actor_status_window = Window_Stat_Actor_Status.new(@actor)
    @actor_status_window.y = @help_window.y + @help_window.height    
  end
  #--------------------------------------------------------------------------
  # * Create Actor Stat Points Window
  #--------------------------------------------------------------------------
  def create_actor_stat_points_window
    # Create Actor Stat Point Window
    @actor_stat_points_window = Window_Stat_Actor_Points.new(@actor)  
    @actor_stat_points_window.y = @actor_status_window.y + @actor_status_window.height
  end  
  #--------------------------------------------------------------------------
  # * Create Controls Window
  #--------------------------------------------------------------------------
  def create_controls_window
    # Create Controls Window
    @controls_window = Window_Stat_Change_Controls.new
    @controls_window.y = @actor_stat_points_window.y + @actor_stat_points_window.height
  end
  #--------------------------------------------------------------------------
  # * Create Actor Status Change
  #--------------------------------------------------------------------------
  def create_status_change_window  
    # Create Status Change Window
    @status_change_window = Window_Stat_Status_Change.new(@actor)
    # Set Status Change Windows
    @status_change_window.help_window = @help_window    
    @status_change_window.point_window = @actor_stat_points_window
    # Set Status Change Window Handler
    @status_change_window.set_handler(:ok,       method(:start_stat_change_prompt))        
    @status_change_window.set_handler(:cancel,   method(:return_scene))    
    @status_change_window.set_handler(:pagedown, method(:next_actor))
    @status_change_window.set_handler(:pageup,   method(:prev_actor))
  end
  #--------------------------------------------------------------------------
  # * Create Status Change Prompt Window
  #--------------------------------------------------------------------------
  def create_status_change_prompt_window
    # Create Stat Change Prompt Window
    @stat_change_prompt_window = Window_Stat_Change_Prompt.new
    # Center Stat Change Window
    @stat_change_prompt_window.x = (Graphics.width - @stat_change_prompt_window.width) / 2
    @stat_change_prompt_window.y = (Graphics.height - @stat_change_prompt_window.height) / 2    
    # Deactivate and Close Stat Change Prompt Window
    @stat_change_prompt_window.deactivate.openness = 0
    # Set Status Change Prompt Window Handler
    @stat_change_prompt_window.set_handler(:ok,     method(:on_stat_change_prompt_ok))
    @stat_change_prompt_window.set_handler(:cancel, method(:on_stat_change_prompt_cancel))    
    @stat_change_prompt_window.set_handler(:clear, method(:on_stat_change_prompt_clear))        
  end
  #--------------------------------------------------------------------------
  # * Start Stat Change Prompt
  #--------------------------------------------------------------------------
  def start_stat_change_prompt
    # Activate and Open Stat Change Prompt Window
    @stat_change_prompt_window.activate.open    
    # Select (No)
    @stat_change_prompt_window.select(1)
  end
  #--------------------------------------------------------------------------
  # * [OK] Stat Change Prompt Command
  #--------------------------------------------------------------------------
  def on_stat_change_prompt_ok
    # Close Stat Change Prompt Window 
    @stat_change_prompt_window.close    
    # Apply Stat Changes
    apply_stat_changes
  end
  #--------------------------------------------------------------------------
  # * [Cancel] Stat Change Prompt Command
  #--------------------------------------------------------------------------
  def on_stat_change_prompt_cancel
    # Close Stat Change Prompt Window 
    @stat_change_prompt_window.close
    # Activate Status Change Window
    @status_change_window.activate
  end
  #--------------------------------------------------------------------------
  # * [Clear] Stat Change Prompt Command
  #--------------------------------------------------------------------------
  def on_stat_change_prompt_clear
    # Clear Status Change Stat Changes and Redraw it's contents
    @status_change_window.clear_stat_changes ; @status_change_window.refresh
    # Refresh Actor Status and Actor Stat Point Window
    @actor_status_window.refresh ; @actor_stat_points_window.refresh
    # Process Stat Change Prompt Cancel
    on_stat_change_prompt_cancel
  end
  #--------------------------------------------------------------------------
  # * Apply Stat Changes
  #--------------------------------------------------------------------------
  def apply_stat_changes
    # Apply Status Changes on Actor
    @status_change_window.apply_stat_changes
    # Refresh Actor Status and Actor Stat Point Window
    @actor_status_window.refresh ; @actor_stat_points_window.refresh
  end
  #--------------------------------------------------------------------------
  # * Change Actors
  #--------------------------------------------------------------------------
  def on_actor_change
    super
    # Set Actor for Status, Point and Status Change Windows
    @actor_status_window.actor = @actor_stat_points_window.actor = 
    @status_change_window.actor = @actor
    # Reactivate Status Change Window
    @status_change_window.activate
  end
end


#==============================================================================
# ** Window_Stat_Actor_Status
#------------------------------------------------------------------------------
#  This window display actor information in the status distribution scene.
#==============================================================================

class Window_Stat_Actor_Status < Window_Base
  #--------------------------------------------------------------------------
  # * Object Initialization
  #     actor : actor object
  #--------------------------------------------------------------------------
  def initialize(actor)
    super(0, 0, 250, 200)
    # Set Actor
    @actor = actor
    refresh
  end
  #--------------------------------------------------------------------------
  # * Set Actor
  #     actor : actor object
  #--------------------------------------------------------------------------
  def actor=(actor) ; @actor = actor ; refresh end  
  #--------------------------------------------------------------------------
  # * Refresh
  #--------------------------------------------------------------------------
  def refresh
    contents.clear
    # Return if Actor is nil
    return if @actor.nil?
    # Draw Actor Face
    draw_actor_face(@actor, 0, 0)    
    # Draw Actor Name & Level
    draw_actor_name(@actor, 100, 0) ; draw_actor_level(@actor, 100, line_height)
    # Draw Actor HP & MP
    draw_actor_hp(@actor, 100, line_height * 2) ; draw_actor_mp(@actor, 100, line_height * 3)    
    # Draw Actor Parameters
    draw_parameters(0, 100)
  end
  #--------------------------------------------------------------------------
  # * Draw Parameters
  #--------------------------------------------------------------------------
  def draw_parameters(x, y)
    6.times {|i| 
      # Get X And Y Coordinate Position
      x2 = x + (i % 2) * 120 ; y2 = y + (i / 2) * line_height
      # Fill Stat Back Bar
      contents.fill_rect(x2, y2 + 2, 105, 20,  Color.new(32, 32, 64, 160))
      # Draw Actor Parameters
      draw_actor_param(@actor, x2, y2, i + 2) 
    }
  end
  #--------------------------------------------------------------------------
  # * Draw Parameters
  #--------------------------------------------------------------------------
  def draw_actor_param(actor, x, y, param_id)
    change_color(system_color)
    draw_text(x, y, 120, line_height, Vocab::param(param_id))
    change_color(normal_color)
    draw_text(x + 120 - 50, y, 36, line_height, actor.param(param_id), 2)
  end
  #--------------------------------------------------------------------------
  # * Draw Actor Face Graphic
  #--------------------------------------------------------------------------
  def draw_actor_face(actor, x, y, enabled = true)
    # Fill Face Back
    contents.fill_rect(x, y, 96, 96,  Color.new(32, 32, 64, 160))
    super
  end  
end


#==============================================================================
# ** Window_Stat_Actor_Points
#------------------------------------------------------------------------------
#  This window display actor parameter stat change points
#==============================================================================

class Window_Stat_Actor_Points < Window_Base
  #--------------------------------------------------------------------------
  # * Object Initialization
  #     actor : actor object
  #--------------------------------------------------------------------------
  def initialize(actor)
    super(0, 0, 250, fitting_height(1))
    # Set Actor
    @actor = actor        
    # Draw Window contents
    refresh
  end
  #--------------------------------------------------------------------------
  # * Set Actor
  #     actor : actor object
  #--------------------------------------------------------------------------
  def actor=(actor) ; @actor = actor ; refresh end
  #--------------------------------------------------------------------------
  # * Refresh
  #--------------------------------------------------------------------------
  def refresh
    # Clear Contents
    contents.clear
    # Return if Actor is nil
    return if @actor.nil?
    # Draw Actor Stat Change Points
    draw_points(@actor.stat_change_points)
  end
  #--------------------------------------------------------------------------
  # * Draw Points
  #     points : points value
  #--------------------------------------------------------------------------
  def draw_points(points)
    # Clear Contents
    contents.clear
    # Change Color to System Color
    change_color(system_color)
    # Draw Parameter Points Header
    draw_text(0, 0, 200, line_height, TDS::Stat_Change_Settings::Param_Points_Name + ":")
    # Reset Font Settings
    reset_font_settings
    # Draw Points
    draw_text(0, 0, contents_width, line_height, points, 2)        
  end
end


#==============================================================================
# ** Window_Stat_Change_Controls
#------------------------------------------------------------------------------
#  This window display the basic controls of the stat change scene.
#==============================================================================

class Window_Stat_Change_Controls < Window_Base
  #--------------------------------------------------------------------------
  # * Object Initialization
  #--------------------------------------------------------------------------
  def initialize
    super(0, 0, 250, fitting_height(3))
    # Draw Window contents
    refresh
  end
  #--------------------------------------------------------------------------
  # * Refresh
  #--------------------------------------------------------------------------
  def refresh
    # Clear Contents
    contents.clear
    # Change Font Color & Draw Controls Header
    change_color(system_color) ; draw_text(0, 0, 250, 24, "Controls")
    # Reset Font Settings
    reset_font_settings
    draw_text(0, 24, 250, 24, "→: Increase Stat")    
    draw_text(0, 48, 250, 24, "←: Decrease Stat") if TDS::Stat_Change_Settings::Allow_Param_Point_Takeback
  end
end

#==============================================================================
# ** Window_Stat_Change_Prompt
#------------------------------------------------------------------------------
#  This window display a prompt before changing stats.
#==============================================================================

class Window_Stat_Change_Prompt < Window_HorzCommand
  #--------------------------------------------------------------------------
  # * Object Initialization
  #     actor : actor object
  #--------------------------------------------------------------------------
  def initialize ; super(0, 0) end
  #--------------------------------------------------------------------------
  # * Get Window Width
  #--------------------------------------------------------------------------
  def window_width ; 240 end
  #--------------------------------------------------------------------------
  # * Get Window Width
  #--------------------------------------------------------------------------
  def window_height ; fitting_height(2) end    
  #--------------------------------------------------------------------------
  # * Calculate Height of Window Contents
  #--------------------------------------------------------------------------
  def contents_height ; height - standard_padding * 2 end    
  #--------------------------------------------------------------------------
  # * Get Digit Count
  #--------------------------------------------------------------------------
  def col_max ; 3 end
  #--------------------------------------------------------------------------
  # * Get Rectangle for Displaying Items
  #--------------------------------------------------------------------------
  def item_rect(index) ; rect = super ; rect.y = line_height ; rect end    
  #--------------------------------------------------------------------------
  # * Create Command List
  #--------------------------------------------------------------------------
  def make_command_list
    # Add Yes & No and Clear Commands
    add_command("Yes", :ok) ; add_command("No", :cancel) ; add_command("Clear", :clear) 
  end
  #--------------------------------------------------------------------------
  # * Refresh
  #--------------------------------------------------------------------------
  def refresh
    super
    change_color(knockout_color)
    # Prompt Message
    draw_text(0, 0, contents_width, line_height, "Change stats?", 1)
  end
end


#==============================================================================
# ** Window_Stat_Status_Change
#------------------------------------------------------------------------------
#  This window display and selects actor information in the status distribution
#  scene.
#==============================================================================

class Window_Stat_Status_Change < Window_Selectable
  #--------------------------------------------------------------------------
  # * Object Initialization
  #     actor : actor object
  #--------------------------------------------------------------------------
  def initialize(actor)
    # Set Actor
    @actor = actor        
    super(250, 72, (Graphics.width - 250), 344)
    # Clear Stat Changes
    clear_stat_changes
    # Activate and draw window contents
    activate.refresh
    # Select First
    select(0)
  end
  #--------------------------------------------------------------------------
  # * Set Actor
  #     actor : actor object
  #--------------------------------------------------------------------------
  def actor=(actor) ; @actor = actor ; clear_stat_changes ; refresh end
  #--------------------------------------------------------------------------
  # * Set Point Window
  #     window : window object
  #--------------------------------------------------------------------------
  def point_window=(window) ; @point_window = window end
  #--------------------------------------------------------------------------
  # * Clear Stat Change Related Values
  #--------------------------------------------------------------------------
  def clear_stat_changes
    # Stat Changes Array
    @stat_changes = Array.new(8, 0)
    # Temporary Spent Change Points
    @temp_spent_change_points = Array.new(8, 0)
    # Temporary Stat Change Points
    @temp_stat_change_points = 0
  end
  #--------------------------------------------------------------------------
  # * Apply Stat Changes
  #--------------------------------------------------------------------------
  def apply_stat_changes    
    # Apply Stat Changes
    @stat_changes.each_with_index {|value, i| 
      # Next if value is 0
      next if value == 0
      # Get Parameter Total Value
      param_total = (@actor.param_base_with_plus(i) + value)
      param_adjust = param_total - @actor.param_cap(i)      
      # Adjust Parameter for cap if Necessary
      value -= param_adjust if param_adjust > 0
      # Add Actor Bonus Parameter
      @actor.add_param(i, value)
      # Set Actor Stat Change Spent Points
      @actor.stat_change_spent_points[i] += @temp_spent_change_points.at(i)
    }
    # Decrease Actor Stat Change Points
    @actor.stat_change_points -= @temp_stat_change_points
    # Clear Stat Changes
    clear_stat_changes
    # Activate and Refresh
    activate.refresh
  end
  #--------------------------------------------------------------------------
  # * Get Number of Items
  #--------------------------------------------------------------------------
  def item_max ; @actor.stat_change_params.size end
  #--------------------------------------------------------------------------
  # * Get Item Height
  #--------------------------------------------------------------------------
  def item_height ; 53 end
  #--------------------------------------------------------------------------
  # * Get Temporary Remaining Actor Poins
  #--------------------------------------------------------------------------
  def actor_points_left ; (@actor.stat_change_points - @temp_stat_change_points) end
  #--------------------------------------------------------------------------
  # * Get Actor Parameter ID
  #--------------------------------------------------------------------------
  def actor_param_id(index = @index) ; @actor.stat_change_params.at(index) end    
  #--------------------------------------------------------------------------
  # * Move Cursor Right
  #--------------------------------------------------------------------------
  def cursor_right(wrap = false)
    super(wrap)
    # Return if No More Points can be added
    return if (@actor.stat_change_points - @temp_stat_change_points) <= 0
    # Get Parameter Total Value
    param_total = (@actor.param_base_with_plus(actor_param_id) + @stat_changes[actor_param_id])
    
    # Return if Parameter Total with change exceeds cap
    return if param_total >= @actor.param_cap(actor_param_id)
    # Increase Parameter and Temp Stat Change Points
    @stat_changes[actor_param_id] += @actor.param_increase_value(actor_param_id) ; @temp_stat_change_points += 1    
    # Increase Temporary Spent Points
    @temp_spent_change_points[actor_param_id] += 1    
    # Redraw Current Item
    redraw_current_item
    # Draw Actor Remaining Points in point window if it's not nil
    @point_window.draw_points(actor_points_left) if !@point_window.nil?
  end
  #--------------------------------------------------------------------------
  # * Move Cursor Left
  #--------------------------------------------------------------------------
  def cursor_left(wrap = false)
    super(wrap)
    # If Parameter Point Take back is allowed
    if TDS::Stat_Change_Settings::Allow_Param_Point_Takeback
      # If Temporary Spent Change Points is less than 0
      if @temp_spent_change_points.at(actor_param_id) <= 0
        # Return if Cannot Get back anymore points
        return if (@actor.stat_change_spent_points.at(actor_param_id) + @temp_spent_change_points.at(actor_param_id)) <= 0
      end
    else
      # Return if Stat Change is 0 or less
      return if @stat_changes.at(actor_param_id) <= 0
    end
    # Decrease Stat Changes
    @stat_changes[actor_param_id] -= @actor.param_increase_value(actor_param_id) ; @temp_stat_change_points -= 1
    # Decrease Temporary Spent Points
    @temp_spent_change_points[actor_param_id] -= 1    
    # Redraw Current Item
    redraw_current_item
    # Draw Actor Remaining Points in point window if it's not nil
    @point_window.draw_points(actor_points_left) if !@point_window.nil?    
  end
  #--------------------------------------------------------------------------
  # * Processing When OK Button Is Pressed
  #--------------------------------------------------------------------------
  def process_ok
    # Return if there are no stat changes
    return if !@stat_changes.any? {|s| s != 0}
    super
  end
  #--------------------------------------------------------------------------
  # * Update Help Text
  #--------------------------------------------------------------------------
  def update_help
    super
    # Draw Parameter Help Text
    @help_window.set_text(TDS::Stat_Change_Settings.param_help_text(actor_param_id))
  end
  #--------------------------------------------------------------------------
  # * Draw Item
  #--------------------------------------------------------------------------
  def draw_item(index)
    # Reset Font Settings
    reset_font_settings
    # Get Item Rect
    rect = item_rect(index)
    rect.x += 4 ; rect.height = 24 ; rect.width -= 8
    draw_text(rect, TDS::Stat_Change_Settings.param_full_name(actor_param_id(index)))        
    rect.y += 24
    # Fill Bar Borders
    contents.fill_rect(rect, Color.new(0, 0, 0))
    rect.x += 1 ; rect.y += 1 ; rect.width -= 2 ; rect.height -= 2
    # Fill Bar Background
    contents.fill_rect(rect, gauge_back_color)    
    # Get Parameter
    parameter = @actor.param_base_with_plus(actor_param_id(index))
    # Get Parameter % Rate
    rate = parameter.to_f / @actor.param_cap(index) * 100
    # Adjust Width by Rate
    rect.width = (rect.width * rate) / 100.0
    # Fill Bar Color
    contents.gradient_fill_rect(rect, *TDS::Stat_Change_Settings.param_colors(actor_param_id(index)))
    rect.width = contents_width - 8
    # Draw Parameter Value
    draw_text(rect, parameter, 2)
    rect.y -= 24
    # If Stat Change is less than 0
    if @stat_changes.at(actor_param_id(index)) < 0    
      # Change Color to Power Down Color
      change_color(power_down_color)      
      draw_text(rect, "#{@stat_changes.at(actor_param_id(index))}", 2)
    elsif @stat_changes.at(actor_param_id(index)) > 0 
      # Change Color to Power UP Color
      change_color(power_up_color)
      # Get Parameter ID
      param_id = actor_param_id(index)
      # Get Total
      total = @actor.param_base_with_plus(param_id) + @stat_changes.at(param_id)
      # Get Parameter Max
      param_max = [total, @actor.param_cap(param_id)].min - @actor.param_base_with_plus(param_id)
      # Draw Parameter Max
      draw_text(rect, "+#{param_max}", 2)      
    end    
  end
end