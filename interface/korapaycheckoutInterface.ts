export interface KorapayProps {
    // publicKey: string;
    reference: string;
    amount: number;
    currency?: string;
    customer: {
      name: string;
      email: string;
    };
    notification_url?: string;
    narration?: string;
    channels?: string[];
    default_channel?: string;
    metadata?: Record<string, any>;
    containerId?: string;
    onClose?: () => void;
    onSuccess?: (response: any) => void;
    onFailed?: (error: any) => void;
    onTokenized?: (data: any) => void;
    onPending?: (data: any) => void;
    merchant_bears_cost?: boolean;
  }
  