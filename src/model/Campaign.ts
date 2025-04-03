/**
 * Campaign interface represents a TikTok Ads campaign
 */
export interface Campaign {
    /**
     * Campaign ID
     */
    campaign_id: string;
    
    /**
     * Campaign name
     */
    campaign_name: string;
    
    /**
     * Advertising objective
     */
    objective: 'REACH' | 'VIDEO_VIEWS' | 'TRAFFIC' | 'CONVERSION' | 'APP_PROMOTION';
    
    /**
     * Campaign budget
     */
    budget?: number;
    
    /**
     * Budget type. Required when budget is specified
     */
    budget_mode?: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL';
    
    /**
     * Campaign status
     */
    status?: 'ENABLE' | 'DISABLE' | 'DELETE';
    
    /**
     * Budget optimization switch
     */
    budget_optimize_on?: boolean;
    
    /**
     * Creation time, UTC timestamp in seconds
     */
    create_time?: string;
    
    /**
     * Last modification time, UTC timestamp in seconds
     */
    modify_time?: string;
}

export type { Campaign as default };